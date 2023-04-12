export const getDomain = () => {

  const developmentDomain = 'http://localhost:3000'
  const productionDomain = ''

  const domain = process.env.NEXT_PUBLIC_APPLICATION_ENVIRONMENT === 'development' ? developmentDomain : productionDomain

  return domain
}