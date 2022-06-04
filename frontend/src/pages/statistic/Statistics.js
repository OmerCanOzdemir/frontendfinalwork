import GetRequest from "../../functions/GetRequest";
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import BarChartDates from "../../components/BarChartDates";
import PieChart from "../../components/PieChart";
const Statistics = () =>{
    const { data, isLoading, error } = GetRequest("https://localhost:7165/api/Statistics/");

    Chart.register(CategoryScale);


    console.log(data);
    if(data){
        return(
            <div className="p-4 grid grid-cols-2 gap-5">
              <BarChartDates usersData={data.userCreatedMonths} projectData ={data.projectsCreatedMonths}/>
              <PieChart data= {data.projectCategories} title = "Aantal projecten met hun respectievelijke categorie"/>
              <PieChart data = {data.userEducation} title = "Aantal gebruikers per opleiding"/>
              <PieChart data = {data.userInterests} title = "Meest intereserende topics voor gebruikers"/>
            </div>
        )
    }else if (isLoading) {
        return (
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                <p>Loading</p>
            </div>
        )
    }
    else if (error != null) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{error}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                </span>
            </div>
        )
    }
   
}



export default Statistics;