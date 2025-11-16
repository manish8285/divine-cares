import { useEffect, useState } from "react";
import AppointmentTable from "./AppointmentTable";
import { getAllAppointmentsApi } from "../../../../api";

export const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAppointments = async () => {
    setLoading(true);

    try {
      const res = await getAllAppointmentsApi();
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
      <h4>All Appointments</h4>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <AppointmentTable appointments={appointments} />
      )}
    </div>
  );
};

