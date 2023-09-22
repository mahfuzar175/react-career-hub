import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({ job }) => {
  const { logo, job_title,  company_name, remote_or_onsite, location, job_type, salary} = job;
  return (
    <div class="card card-compact bg-base-100 shadow-xl p-10 items-start mt-8">
      <figure className="ml-4"> 
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#6875ca]">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#6875ca]">{job_type}</button>
        </div>
        <div className="mt-2 mb-2 flex gap-4">
            <h2 className="flex"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{location}</h2>
            <h2 className="flex"><AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>{salary}</h2>
        </div>
        <div class="card-actions">
          <button class="btn btn-primary bg-gradient-to-r from-[#7E90FE] to-[#9873FF] normal-case text-lg font-bold text-white border-none rounded-md">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
