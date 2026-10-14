export interface ProfileData {
  name: string;
  role: string;
  organization: string;
  intro: string;
  expertise: string[];
}

export const profile: ProfileData = {
  name: "Luis Becerra Solis",
  role: "Senior Software Engineer",
  organization: "Massachusetts Bay Transportation Authority (MBTA)",
  intro: "Senior Software Engineer at the Massachusetts Bay Transportation Authority (MBTA).",
  expertise: [
    "Distributed systems & enterprise architecture",
    "Cloud-native infrastructure & Infrastructure as Code (Terraform, GCP)",
    "CI/CD automation & workload identity federation",
    "Resilient backend platforms & API design",
    "Software engineering (TypeScript, Python, Go)"
  ]
};
