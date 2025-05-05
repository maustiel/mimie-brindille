export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log('📝 Nouveau consentement :', body)
  return { status: 'ok' }
})
