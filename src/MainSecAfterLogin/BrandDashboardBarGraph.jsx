import { useEffect,useState } from "react";
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";
import {
  Clock,
  PlayCircle,
  CheckCircle,
  BarChart3,
  UserPlus,
  Eye,
  MousePointerClick,
} from "lucide-react";
import Aos from 'aos';
import "aos/dist/aos.css";

import MetricsView from "./Metrics";
const data=[
  {name:"Active",value:30},
  {name:"Pending",value:40},
  {name:"Closed",value:50}
];
const metricStats = [
    {
      title: "Engagement Rate",
      value: "8.7%",
      icon: <BarChart3 size={28} className="text-purple-500" />,
      bg: "bg-purple-100",
    },
    {
      title: "Followers Gained",
      value: "1.2K",
      icon: <UserPlus size={28} className="text-blue-500" />,
      bg: "bg-blue-100",
    },
    {
      title: "Reach",
      value: "25K",
      icon: <Eye size={28} className="text-indigo-500" />,
      bg: "bg-indigo-100",
    },
    {
      title: "Clicks",
      value: "3.4K",
      icon: <MousePointerClick size={28} className="text-red-500" />,
      bg: "bg-red-100",
    },
  ];
const colors=["#a855f7", "#22c55e", "#facc15"];
export const BrandDashboardBarGraph = () => {
  const [outerRadius, setOuterRadius] = useState(110);
  const [cxPercent,setCxPercent]=useState("55%");
   const [cyPercent,setCyPercent]=useState("55%");
  useEffect(()=>{
    Aos.init({
       Duration:800,
        easing:"ease-in-out",
        once:false
    })

    const updateRadius=()=>{
      if(window.innerWidth<500){
        setOuterRadius(80);
        setCxPercent("50%");
        setCyPercent("65%")
      }
      else{
        setOuterRadius(110);
        setCxPercent("55%");
        setCyPercent("55%")
      }
    };
    updateRadius();
      window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
    
  },[])
  return ( 
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 pt-8 pb-6">
        {metricStats.map((metric, idx) => (
          <div
            key={idx}
            className={`rounded-lg shadow-md px-5 py-6 flex items-center gap-4 ${metric.bg}`}
          >
            <div>{metric.icon}</div>
            <div>
              <h2 className="text-sm font-medium text-gray-700">{metric.title}</h2>
              <p className="text-lg font-semibold text-gray-800">{metric.value}</p>
            </div>
          </div>
        ))}
      </div>

     <div>
      <h2 className="font-medium text-2xl text-purple-400 text-center my-5">Campagin Summary</h2>
    </div>
    <div className="">
      <ResponsiveContainer width="100%" height={350}>
     
        <PieChart>
          <Pie className=""      
           tabIndex={-1}
            data={data}
            cx={cxPercent}
            cy={cyPercent}
            outerRadius={outerRadius}
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          {/* <Tooltip /> */}
          <Legend  height={36} />
        </PieChart>
      
      </ResponsiveContainer>
      
    </div>
    
    </>
   );
}