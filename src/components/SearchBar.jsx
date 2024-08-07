import { IoIosSearch } from "react-icons/io";
import Input from "./Input";

export default function SearchBar(){
    return(
        <Input classname="testing" icon={<IoIosSearch />} name="search"></Input>
    )
}