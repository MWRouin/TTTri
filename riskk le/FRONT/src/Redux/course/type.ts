export interface Course {
  CourseId?: number;
  Title: string;
  CategoryId?:number;
  formerId?:number;
  Description?: string;
  LevelId?: number;
  UserId?: number;
  Duration?: number;
  image?:string;
  isActive?:boolean;
  isFavorite?:boolean
}
