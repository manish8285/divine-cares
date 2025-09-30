import { PackageDetails, PackageForm, SEO } from "../common"

const seoData = {
    title: "Book Appointment | Divine Homoeo Care",
    description:
      "Book your appointment at Divine Homoeo Care. Get expert homoeopathic consultation from B.H.M.S, M.D. qualified doctors with 10+ years of trusted experience. Safe, natural & side-effect free treatments.",
    keywords:
      "book appointment homoeopathy, online doctor consultation, divine homoeo care appointment, homeopathy treatment booking, Gurgaon homoeopathy, Raipur homoeopathy",
    author: "Divine Homoeo Care",
    url: "https://www.divinehcare.com/package"
  };

export const PackagePage=()=>{
    return (
        <>
        <SEO {...seoData} />
        <PackageDetails />
        
        </>
    )
}