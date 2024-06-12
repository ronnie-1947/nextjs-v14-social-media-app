'use server'

import { redirect } from "next/navigation"

export async function searchAction(formData: FormData){
  
  const term = formData.get('term')
  console.log(term);
  

  if(!term || typeof(term)!=='string'){
    return redirect('/')
  }

  redirect(`/search?term=${term}`)
}