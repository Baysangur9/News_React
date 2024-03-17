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

export  interface IPaginationProps {
  totalPages: number;
  currentPage:number,
  hundlePageClic:(page:number) => void,
  hundleNextPage:() => void,
  hundlePrevPage:() => void,
  }

export interface NewsApiResponce {
  news: INews[]
  page: number
  status: string
}

export interface CategoriesApiResponce {
  categories: CategoriesType[]
  description: string
  status: string
}

export interface IFilteres {
page_number:number,
page_size:number,
category:CategoriesType | null,
keywords:string;
}

export type ParamsType = Partial<IFilteres>
export type SkeletonType = 'banner' | 'item'
export type DirectionType = 'row' | 'column'


export type CategoriesType =
'regional'|
'technology'|
'lifestyle'|
'business'|
'general'|
'programming'|
'science'|
'entertainment'|
'world'|
'sports'|
'politics'|
'health'|
'opinion'|
'food'|
'game'|
'fashion'|
'academic'|
'crap'|
'travel'|
'culture'|
'economy'|
'environment'|
'art'|
'music'|
'notsure'|
'CS'|
'education'|
'redundant'|
'television'|
'commodity'|
'movie'|
'entrepreneur'|
'review'|
'auto'|
'energy'|
'celebrity'|
'medical'|
'gadgets'|
'design'|
'EE'|
'security'|
'mobile'|
'estate'|
'funny';


