// 小米手环快应用 - 直线画板工具库

/**
 * 绘制直线
 */
export function drawLine(ctx, line) {
  if (!ctx || !line) return
  
  ctx.beginPath()
  ctx.moveTo(line.startX, line.startY)
  ctx.lineTo(line.endX, line.endY)
  ctx.strokeStyle = line.color
  ctx.lineWidth = line.width
  ctx.lineCap = 'round'
  ctx.stroke()
}

/**
 * 清空画布
 */
export function clearCanvas(ctx, width, height) {
  if (!ctx) return
  ctx.clearRect(0, 0, width, height)
}

/**
 * 重绘所有线条
 */
export function redrawAll(ctx, lines) {
  if (!ctx || !lines) return
  
  lines.forEach(line => {
    drawLine(ctx, line)
  })
}

/**
 * 获取两点距离
 */
export function getDistance(x1, y1, x2, y2) {
  const dx = x2 - x1
  const dy = y2 - y1
  return Math.sqrt(dx * dx + dy * dy)
}

/**
 * 颜色预设
 */
export const COLORS = [
  '#000000', // 黑色
  '#FF3B30', // 红色
  '#FF9500', // 橙色
  '#FFCC00', // 黄色
  '#34C759', // 绿色
  '#007AFF', // 蓝色
  '#5856D6', // 紫色
  '#AF52DE'  // 紫罗兰
]

/**
 * 线条粗细预设
 */
export const LINE_WIDTHS = [1, 2, 3, 5, 8, 10]
