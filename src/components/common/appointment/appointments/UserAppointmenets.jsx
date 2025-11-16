import { useEffect, useState } from "react";
import { getAppointmentsByUserApi } from "../../../../api";
import AppointmentTableUser from "./AppointmentTableUser";

export const UserAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAppointments = async () => {
    setLoading(true);

    try {
      const res = await getAppointmentsByUserApi();
      setAppointments(res.data || []);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="container my-4">

      {loading ? (
        <p>Loading...</p>
      ) : (
        <AppointmentTableUser appointments={appointments} />
      )}
    </div>
  );
};

