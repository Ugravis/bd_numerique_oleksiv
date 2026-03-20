<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  let ctx: CanvasRenderingContext2D | null = null
  const img = new Image()
  img.src = '/drafts/parliament.png'

  let iconImg = new Image()
  iconImg.src = '/icons/hand_mouse.svg'
  const iconSize = 40
  const hoverScale = 1.12

  let mousePos = { x: 0, y: 0 }
  let hoveredIndex: number | null = null

  // Hotspots : coordonnées relatives (0 à 1) avec radius
  const hotspots = [
    { x: 0.45, y: 0.42, radius: 0.06, name: 'people_flashback' },
    { x: 0.4, y: 0.75, radius: 0.06, name: 'notes_flashback' },
    { x: 0.3, y: 0.89, radius: 0.06, name: 'bear_flashback' }
  ]

  // Dessiner l'image et les hotspots (cercles)
  function draw() {
    if (!ctx || !img.complete) return
    const canvas = ctx.canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

    // Dessiner les hotspots circulaires
    hotspots.forEach((h, i) => {
      const centerX = h.x * canvas.width
      const centerY = h.y * canvas.height

      const scale = hoveredIndex === i ? hoverScale : 1
      const size = iconSize * scale

      const x = centerX - size / 2
      const y = centerY - size / 2

      ctx!.save()

      ctx!.globalAlpha = 0.6 

      ctx!.drawImage(iconImg, x, y, size, size)

      ctx!.restore()
    })
  }

  // Vérifie si la souris est sur un hotspot (distance euclidienne)
  function checkHover() {
    if (!ctx) return
    const canvas = ctx.canvas
    hoveredIndex = null

    hotspots.forEach((h, i) => {
      const centerX = h.x * canvas.width
      const centerY = h.y * canvas.height

      const radius = iconSize / 2

      const dx = mousePos.x - centerX
      const dy = mousePos.y - centerY

      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance <= radius) {
        hoveredIndex = i
      }
    })

    canvas.style.cursor = hoveredIndex !== null ? 'pointer' : 'default'

    draw()
  }

  // Gestion souris
  function onMouseMove(e: MouseEvent) {
    if (!ctx) return
    const rect = ctx.canvas.getBoundingClientRect()
    mousePos.x = e.clientX - rect.left
    mousePos.y = e.clientY - rect.top
    checkHover()
  }

  function onClick() {
    if (hoveredIndex !== null) {
      router.push({ name: hotspots[hoveredIndex]!.name })
    }
  }

  onMounted(() => {
    iconImg.onload = draw

    const canvas = canvasRef.value!
    ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
      draw()
    }

    img.onload = resize
    window.addEventListener('resize', resize)

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('click', onClick)
  })
</script>

<template>
  <div class="canva-subox">
    <div class="canva-box">
      <canvas ref="canvasRef"></canvas>
    </div>
  </div>
</template>

<style scoped>
  .canva-subox {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .canva-box {
    aspect-ratio: 16/9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  canvas {
    width: 100%;
    height: 100%;
    touch-action: none;
    /* border: 2.5px solid black; */
  }
</style>