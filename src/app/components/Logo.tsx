import { FaCircleDollarToSlot } from "react-icons/fa6";

export function Logo(){
	return(
		<div className="
            flex flex-row items-center justify-center
            text-zinc-100 italic text-4xl select-none
            mt-11 m-0">
        <FaCircleDollarToSlot
          className="mr-1 text-amber-300"/>
        <p className="font-light">
          coin.
        </p>
        <p className="font-black">
          nest
        </p>
      </div>
	);
}