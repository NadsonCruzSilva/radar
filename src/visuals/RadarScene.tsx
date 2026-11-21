import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useDeck } from '@/deck/context'

type RadarSceneProps = {
  className?: string
  accent?: string
  base?: string
  intensity?: number
  points?: number
}

type RadarDot = {
  radius: number
  angle: number
  angularSpeed: number
  hover: boolean
  opacity: number
  mesh: THREE.Mesh
}

/**
 * Radar vetorial desenhado em Three.js: anéis concêntricos, setor de varredura
 * e pontos que "acendem" quando o setor passa por eles. Serve de motivo visual
 * recorrente do deck (capa e encerramento).
 */
export default function RadarScene({
  className = '',
  accent = '#2F9E41',
  base = '#A5B09A',
  intensity = 0.9,
  points = 14,
}: RadarSceneProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const { paused } = useDeck()

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const canvas = document.createElement('canvas')
    const supportsWebGL =
      typeof WebGLRenderingContext !== 'undefined' &&
      Boolean(canvas.getContext('webgl2') ?? canvas.getContext('webgl'))
    if (!supportsWebGL) return

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
    camera.position.set(0, 3.4, 6.4)
    camera.lookAt(0, 0, 0)

    const group = new THREE.Group()
    group.rotation.x = -Math.PI / 2.18
    scene.add(group)

    const lineBase = new THREE.Color(base)
    const lineAccent = new THREE.Color(accent)

    const ringMaterial = (color: THREE.Color, opacity: number) =>
      new THREE.LineBasicMaterial({ color, transparent: true, opacity })

    for (let i = 1; i <= 4; i += 1) {
      const radius = i * 1
      const segments = 160
      const pts: THREE.Vector3[] = []
      for (let s = 0; s <= segments; s += 1) {
        const a = (s / segments) * Math.PI * 2
        pts.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0))
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(pts)
      const isOuter = i === 4
      group.add(
        new THREE.Line(
          geometry,
          ringMaterial(isOuter ? lineAccent : lineBase, isOuter ? 0.55 : 0.28),
        ),
      )
    }

    for (let i = 0; i < 8; i += 1) {
      const a = (i / 8) * Math.PI * 2
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(Math.cos(a) * 4, Math.sin(a) * 4, 0),
      ])
      group.add(new THREE.Line(geometry, ringMaterial(lineBase, 0.12)))
    }

    const sweepGeometry = new THREE.CircleGeometry(4, 64, 0, Math.PI / 4.5)
    const sweepMaterial = new THREE.MeshBasicMaterial({
      color: lineAccent,
      transparent: true,
      opacity: 0.16 * intensity,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
    const sweep = new THREE.Mesh(sweepGeometry, sweepMaterial)
    group.add(sweep)

    const sweepEdgeGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(4, 0, 0),
    ])
    group.add(new THREE.Line(sweepEdgeGeometry, ringMaterial(lineAccent, 0.75)))

    const dotGeometry = new THREE.CircleGeometry(0.045, 16)
    const dots: RadarDot[] = []
    for (let i = 0; i < points; i += 1) {
      const material = new THREE.MeshBasicMaterial({
        color: lineAccent,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      })
      const mesh = new THREE.Mesh(dotGeometry, material)
      const radius = 0.6 + Math.random() * 3.3
      const angle = Math.random() * Math.PI * 2
      mesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0.01)
      mesh.scale.setScalar(i % 4 === 0 ? 1.7 : 1)
      group.add(mesh)
      dots.push({
        radius,
        angle,
        angularSpeed: 0.0045,
        hover: i % 4 === 0,
        opacity: 0,
        mesh,
      })
    }

    const resize = () => {
      const w = host.clientWidth || 1
      const h = host.clientHeight || 1
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()

    const observer = new ResizeObserver(resize)
    observer.observe(host)
    host.appendChild(renderer.domElement)
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.display = 'block'

    let sweepAngle = 0
    let raf = 0
    let last = performance.now()
    const tmp = new THREE.Vector3()

    const animate = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      sweepAngle = (sweepAngle + dt * 0.85) % (Math.PI * 2)
      sweep.rotation.z = sweepAngle
      sweepEdgeGeometry.setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(Math.cos(sweepAngle) * 4, Math.sin(sweepAngle) * 4, 0),
      ])

      for (const dot of dots) {
        dot.angle += dot.angularSpeed * 0.35
        tmp.set(Math.cos(dot.angle) * dot.radius, Math.sin(dot.angle) * dot.radius, 0.01)
        dot.mesh.position.copy(tmp)

        let delta = sweepAngle - dot.angle
        delta = ((delta + Math.PI * 2) % (Math.PI * 2))
        const near = delta < 0.6
        const target = near ? (dot.hover ? 1 : 0.62) : dot.hover ? 0.28 : 0.12
        dot.opacity += (target - dot.opacity) * Math.min(dt * 5, 1)
        const material = dot.mesh.material as THREE.MeshBasicMaterial
        material.opacity = dot.opacity * intensity
        const scale = dot.hover ? 1.7 : 1
        dot.mesh.scale.setScalar(scale * (0.9 + dot.opacity * 0.35))
      }

      group.rotation.z += dt * 0.02
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }

    if (paused) {
      sweep.rotation.z = Math.PI / 5
      renderer.render(scene, camera)
    } else {
      raf = requestAnimationFrame(animate)
    }

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      renderer.dispose()
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Line) {
          obj.geometry.dispose()
          const materials = Array.isArray(obj.material) ? obj.material : [obj.material]
          for (const material of materials) material.dispose()
        }
      })
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement)
    }
  }, [accent, base, intensity, points, paused])

  return <div ref={hostRef} className={className} aria-hidden="true" />
}
