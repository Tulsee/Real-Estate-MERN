import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const ListingCard = ({ listing }) => {
  const {
    _id,
    name,
    imageUrls,
    address,
    description,
    offer,
    discountPrice,
    regularPrice,
    type,
    bedrooms,
    bathrooms,
  } = listing;
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${_id}`}>
        <img
          src={
            imageUrls[0] ||
            "https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="listing cover Image"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex-col gap-2">
          <p className="truncate text-lg font-semibold text-slate-700 w-full">
            {name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />{" "}
            <p className="text-sm text-gray-600 truncate w-full">{address}</p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          <p className="text-slate-700 mt-2 font-semibold flex items-center">
            ${" "}
            {offer
              ? discountPrice.toLocaleString("en-US")
              : regularPrice.toLocaleString("en-US")}
            {type === "rent" && " / month"}
          </p>
          <div className="text-slate-700 flex gap-4">
            <div className="font-bold text-xs">
              {bedrooms > 1 ? `${bedrooms} beds` : `${bedrooms} bed`}
            </div>
            <div className="font-bold text-xs">
              {bathrooms > 1 ? `${bathrooms} baths` : `${bathrooms} bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
