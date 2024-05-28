"use client"
import Image from "next/image"
import {useParams} from 'next/navigation'
import Link from "next/link"
import { Category } from "@prisma/client"

type CategoryIconProps={
    category: Category
}

export default function CategoryIcon({category}:CategoryIconProps){
    const params = useParams<{category:string}>()
    console.log(params)
    return(
        <div className={`${category.slug === params.category ? 'bg-amber-400' : ''} flex items-center grap-4 w-full border-t border-gray-200 p-3 
            	last-of-type:border-b`}>
            <div className="w-16 h-16 relative">
            <img 
                width={64}
                height={64}
                src={`/icon_${category.slug}.svg`} 
                alt="imagen categoria"/>
            </div>

            <Link 
                className="text-xl font-bold" 
                href={`/order/${category.slug}`}>
                {category.name}
            </Link>
        </div>
    )
}