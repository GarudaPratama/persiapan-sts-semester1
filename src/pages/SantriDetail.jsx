import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { santries } from "../pages/Home";

function SantriDetail() {
  const { id } = useParams();

  const [currentData, setCurrentData] = useState(null)

  useEffect(() => {
      if (id) {
        const data = santries.find((santri) => santri.id == id);
        setCurrentData(data);
      }
  }, [id])

  return(
    <div>
        <p>ID : {currentData?.id}</p>
        <p>Nama : {currentData?.name}</p>
    </div>
  ) 
}

export default SantriDetail;
