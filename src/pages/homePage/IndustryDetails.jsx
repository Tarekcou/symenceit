import { useParams } from "react-router-dom";

export default function IndustryDetails() {
  const { id } = useParams();

  return (
    <div className="p-10">
      <h2 className="mb-4 font-bold text-3xl capitalize">{id.replace("-", " ")}</h2>
      <p className="text-gray-700">
        This page will contain detailed information about Symence IT's work in the "{id}" domain.
        You can include case studies, images, solutions, and project highlights here.
      </p>
    </div>
  );
}
