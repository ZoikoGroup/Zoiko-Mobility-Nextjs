import { AnimatedSection, Container } from "@/components/shared";

const participants = [
  { title: "Riders", description: "Convenient, understandable and dependable ways to access eligible mobility services." },
  { title: "Drivers", description: "Technology and operating experiences designed around the realities of providing transportation services." },
  { title: "Fleet & transportation partners", description: "Ways to connect vehicles, drivers, operations and capacity to a wider mobility ecosystem where eligible." },
  { title: "Businesses", description: "Transportation experiences for employees, customers, guests or partners as commercially available." },
  { title: "Airports & travel ecosystems", description: "Mobility coordination where timing, capacity, staging, access rules and passenger flow matter." },
  { title: "Cities & public sector", description: "Technology capable of operating within legitimate local requirements and public-policy constraints." },
  { title: "Technology & service partners", description: "Secure, governed integration opportunities that strengthen the mobility ecosystem." },
];

export default function ParticipantsSection() {
  return (
    <AnimatedSection className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <h2 className="max-w-xl text-2xl font-bold tracking-tight text-brand-purple-dark sm:text-3xl">
          Mobility has many participants.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
          {participants.map((item, index) => (
            <div
              key={item.title}
              className={
                index === participants.length - 1
                  ? "py-5"
                  : "border-b border-gray-200 py-5"
              }
            >
              <h3 className="text-sm font-semibold text-brand-purple-dark">{item.title}</h3>
              <p className="mt-1.5 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
