export default function AboutText() {
    return (
      <section className="w-full bg-white text-gray-800">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <header className="mb-8">
            <p className="mt-3 text-base text-gray-600">
              A family legacy of compassionate, affordable homeopathic care.
            </p>
          </header>
  
          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              Our journey began in a small village with Lt. Shree <strong>Dr. Lakshmi Narayan Shastri</strong>,
              whose purpose was simple yet powerful—bring natural and accessible
              healthcare to local families through the science of homeopathy.
            </p>
  
            <p>
              What started as a humble practice became a living legacy, carried forward
              by his son and today by his grand daughter <strong>Dr. Sweta</strong> with her dedicated team of doctors.
              Across generations, one promise remains unchanged: healing that focuses on
              the person, not just the disease.
            </p>
  
            <p>
              We are not a brand or a corporate chain. We are a <strong>professional
              healthcare family</strong>—committed to making people healthy without
              the burden of spending lakhs in hospitals. Since the <strong>20th century</strong>,
              we&rsquo;ve been helping people live free from disease—naturally, safely, and
              effectively.
            </p>
          </div>
  
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            <li className="">
              <p className="font-semibold">Compassionate Care</p>
              <p className="text-sm text-gray-600">
                Every patient is treated like family.
              </p>
            </li>
            <li className="">
              <p className="font-semibold">Affordable Healing</p>
              <p className="text-sm text-gray-600">
                Quality treatment without financial stress.
              </p>
            </li>
            <li className="">
              <p className="font-semibold">Holistic Approach</p>
              <p className="text-sm text-gray-600">
                Addressing root causes, not just symptoms.
              </p>
            </li>
          </ul>
  
          <div className="mt-10 rounded-2xl bg-gray-50 p-6">
            <p className="text-base text-gray-700">
              From our family to yours—bringing trustworthy homeopathic care to every
              home, with integrity and dedication.
            </p>
          </div>
        </div>
      </section>
    );
  }
  