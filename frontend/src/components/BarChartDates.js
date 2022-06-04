import { Bar } from "react-chartjs-2";



const BarChartDates = (props) => {
    
    var countUsers = [0,0,0,0,0,0,0,0,0,0,0,0];
    var countProjects = [0,0,0,0,0,0,0,0,0,0,0,0];

    props.usersData.forEach(element => {
        var position = element.item1 - 1;
        countUsers[position] = element.item2;
    });

    props.projectData.forEach(element => {
        var position = element.item1 - 1;
        countProjects[position] = element.item2;
    });


    return (
        <div >
            <Bar

                height={100}
                data={{
                    labels: ["Jan", 'Feb', "Maa", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
                    datasets: [
                        {  
                            label: 'Gebruikers',
                            data: countUsers,
                            backgroundColor: "rgba(5, 200, 200)"
                        },
                        {
                            label: "Projecten",
                            data:countProjects,
                            backgroundColor : "rgba(125,45,75)"
                        }
                    ],
                }}
                options ={{
                  plugins: {
                      title: {
                          display: true,
                          text: 'Aantal aangemaakte gebruikers en projecten dit jaar'
                      }
                  }}
                }
            />
        </div>
    )
}

export default BarChartDates;