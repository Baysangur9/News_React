import { CategoriesType } from "@/entities/category"


export interface INews {
  author:string,
  title:string,
  published:string,
  image:string,
  url:string,
  language:string,
  category:CategoriesType[],
  descriotion:string,
  id:string,
}


export interface NewsApiResponce {
  news: INews[]
  page: number
  status: string
}