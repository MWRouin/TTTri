import { useNavigate } from 'react-router-dom';

export default function CategoryList({ categories }: any) {
    const resourcesUrl = import.meta.env.VITE_RESOURCES_URL;
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-4 place-items-center">
            {categories.map((categorie: any) => {
                return (
                    <div
                        className="cursor-pointer h-full"
                        key={categorie.categorieId}
                        onClick={() => {
                            navigate(`/allcourses/${categorie.categorieId}`);
                        }}
                    >
                        <div className="bg-gray-100 h-full flex justify-center items-center p-2">
                            {categorie?.image ? (
                                <img src={`${resourcesUrl}/${categorie?.image}`} className="hover:scale-110 duration-200 h-full w-full object-contain" />
                            ) : (
                                <img src="/assets/images/marketing.png" className="hover:scale-110 duration-200" />
                            )}
                        </div>
                        <p className="mt-2 font-extrabold text-lg">{categorie.description}</p>
                    </div>
                );
            })}
        </div>
    );
}
