import { Pie } from "react-chartjs-2";





const PieChart = (props) => {


    var labels = [];
    var countLabels = [];


    props.data.forEach(element => {
        labels.push(element.item1);
        countLabels.push(element.item2);
    });


    return (
        <div>
            <Pie
                data={{
                    datasets: [{
                        data: countLabels,
                        backgroundColor:  ["#a3c7c9","#889d9e","#647678"," #35682D","#9C9C9C","#EDFF21","#642424","#B44C43","#84C3BE","#EC7C26"],
                        hoverBackgroundColor: ["#96b7b9","#718283","#5c6b6d"]
                    }],
                
                    labels: labels,
                    
                }}
                width={300} 
                height={300} 
                options={{
                    maintainAspectRatio: false, responsive: false, plugins: {
                        title: {
                            display: true,
                            text:props.title
                }}
                    }
                }


                    />
        </div>
    )
}


export default PieChart;