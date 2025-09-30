import { Appointment, SEO, Treatments } from "../common"

export const treatmentsSeo = {
    title: "Treatments | Divine Homoeo Care",
    description:
      "Explore specialized homoeopathic treatments at Divine Homoeo Care. From Kidney Stones, Piles, Lipoma, Vitiligo, Psoriasis, Hair Fall, Tumor, Joint Pain to Pityriasis—our safe, side-effect free treatments are trusted by thousands of patients.",
    keywords:
      "Homoeopathy treatments, Kidney Stone cure, Piles homoeopathy, Lipoma treatment, Vitiligo cure, Psoriasis homoeopathy, Hair Fall solution, Tumor treatment, Joint Pain relief, Pityriasis homoeopathy, Divine Homoeo Care",
    url: "https://www.divinehcare.com/treatments"
  };
  

export const TreatmentPage=()=>{
    return (
        <>
        <SEO {...treatmentsSeo} />
            <Treatments />

            <Appointment />
        </>
    )
}