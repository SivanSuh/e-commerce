export default interface CategoryModel {
    _id: string;
    categoryName: string;
}
export default interface ProductCard {
    _id:string;
    image:string;
    price:string;
    title:string;
    category:CategoryModel
}