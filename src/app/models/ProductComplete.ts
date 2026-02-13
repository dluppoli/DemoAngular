import { ProductSmall } from "./ProductSmall";
import { Review } from "./Review";

export class ProductComplete extends ProductSmall
{
    images:string[]=[]
    reviews:Review[] = []
}