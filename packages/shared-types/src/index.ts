export interface Appointment {
  id: string;
  patientName: string;
  appointmentDate: string;
  status: "scheduled" | "cancelled" | "completed";
}
