import { useEffect, useState } from "react";
import AppointmentTable from "./AppointmentTable";
import { getAppointmentsByDoctorApi } from "../../../../api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate()
    const { isAuthenticatedAdmin } = useSelector((state) => state.auth);

  const fetchAppointments = async () => {
    setLoading(true);

    try {
      const res = await getAppointmentsByDoctorApi();
      setAppointments(res.data || []);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }

    setLoading(false);
  };

    useEffect(()=>{
            if(!isAuthenticatedAdmin){
            navigate(`/auth-doctor/login?redirect=${location.pathname}`)
        }
        },[])

  useEffect(() => {

    fetchAppointments();
  }, []);

  return (
    <div className="container my-4">
      <h4>All Appointments</h4>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <AppointmentTable appointments={appointments} />
      )}
    </div>
  );
};

