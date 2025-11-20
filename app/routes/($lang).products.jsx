export default function Products(){
  return <h1>Products</h1>
}

export async function loader({params}){

  const language = params.lang
  console.log(language)

  return language
}
