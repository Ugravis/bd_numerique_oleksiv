<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const props = defineProps<{
    baseImageUrl: string
    revealImageUrl: string
  }>()

  let handleImg = new Image()
  handleImg.src = '/icons/move.svg'

  const canvasRef = ref<HTMLCanvasElement | null>(null)

  let ctx: CanvasRenderingContext2D | null = null
  let baseImg = new Image()
  let revealImg = new Image()

  let isDragging = false
  let cursor = { x: 0, y: 0 }
  const width = 300 
  const height = 200 

  function draw() {
    if (!ctx) return

    const canvas = ctx.canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 1. image de base
    ctx.drawImage(baseImg, 0, 0, canvas.width, canvas.height)

    // 2. créer masque
    ctx.save()

    ctx.beginPath()
    ctx.rect(
      cursor.x - width / 2,
      cursor.y - height / 2,
      width,
      height
    )
    ctx.clip()

    // 3. image révélée
    ctx.drawImage(revealImg, 0, 0, canvas.width, canvas.height)

    ctx.restore()

    ctx.lineWidth = 2
    ctx.strokeStyle = 'black'
    ctx.strokeRect(
      cursor.x - width / 2,
      cursor.y - height / 2,
      width,
      height
    )

    const handleSize = 24
    const padding = 10

    const rectX = cursor.x - width / 2
    const rectY = cursor.y - height / 2

    ctx.drawImage(
      handleImg,
      rectX + width - handleSize - padding,
      rectY + height - handleSize - padding,
      handleSize,
      handleSize
    )
  }

  function updateCursor(e: MouseEvent | TouchEvent) {
    const canvas = canvasRef.value!
    const rect = canvas.getBoundingClientRect()

    let clientX, clientY

    if (e instanceof TouchEvent) {
      clientX = e.touches[0]!.clientX
      clientY = e.touches[0]!.clientY
    } else {
      clientX = e.clientX
      clientY = e.clientY
    }

    cursor.x = clientX - rect.left
    cursor.y = clientY - rect.top

    draw()
  }

  function isInRect(x: number, y: number) {
    const rectX = cursor.x - width / 2
    const rectY = cursor.y - height / 2

    return (
      x >= rectX &&
      x <= rectX + width &&
      y >= rectY &&
      y <= rectY + height
    )
  }

  onMounted(() => {
    const canvas = canvasRef.value!
    ctx = canvas.getContext('2d')

    baseImg.src = props.baseImageUrl
    revealImg.src = props.revealImageUrl

    const resize = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
      draw()
    }

    baseImg.onload = resize
    revealImg.onload = resize

    canvas.addEventListener('mousedown', () => (isDragging = true))
    canvas.addEventListener('mouseup', () => (isDragging = false))
    canvas.addEventListener('mouseleave', () => (isDragging = false))

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      if (isDragging) {
        canvas.style.cursor = 'grabbing'
        updateCursor(e)
        return
      }

      if (isInRect(x, y)) {
        canvas.style.cursor = 'grab'
      } else {
        canvas.style.cursor = 'default'
      }
    })

    // mobile
    canvas.addEventListener('touchstart', (e) => {
      isDragging = true
      updateCursor(e)
    })

    canvas.addEventListener('touchmove', (e) => {
      updateCursor(e)
    })

    canvas.addEventListener('touchend', () => (isDragging = false))

    window.addEventListener('resize', resize)
  })
</script>

<template>
  <div class="reveal-container">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<style scoped>
.reveal-container {
  width: 100%;
  height: 100%;
}

canvas {
  width: 100%;
  height: 100%;
  display: block;
  touch-action: none; 
}
</style>