import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";


export function Summary(){
    return(
        <section className="flex flex-row justify-between items-center mx-72 -mt-20">
        <div className="p-8 bg-zinc-100 rounded-md w-96">
            <span className="flex flex-row justify-between items-center gap-32
                mb-8 text-xl">
                <strong className="text-zinc-500">Entradas</strong>
                <FaRegArrowAltCircleDown className="text-green-500"/>

            </span>
            <p className="text-zinc-700 text-4xl">
                R$ 17.440,57
            </p>
        </div>
        <div className="p-8 bg-zinc-100 rounded-md w-96">
            <span className="flex flex-row justify-between items-center gap-32
                mb-8 text-xl">
                <strong className="text-zinc-500">Saídas</strong>
                <FaRegArrowAltCircleUp className="text-red-500"/>

            </span>
            <p className="text-zinc-700 text-4xl">
                R$ 7.355,86
            </p>
        </div>
        <div className="p-8 bg-green-400 rounded-md w-96">
            <span className="flex flex-row justify-between items-center gap-32
                mb-8 text-xl">
                <strong className="text-zinc-100">Caixa</strong>
                <MdOutlineAttachMoney className="text-zinc-100"/>

            </span>
            <p className="text-zinc-100 text-4xl">
                R$ 9.422,65
            </p>
        </div>
    </section>
    );
}