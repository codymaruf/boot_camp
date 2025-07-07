import {
  Zap,
  Dumbbell,
  Users,
  HeartPulse
} from "lucide-react";

const Programs = () => {
  return (
    <section id="services" className="bg-black text-white py-20 text-center px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
          Boot Camp Fitness Club is Sylhet’s<br />
          modern gym for total transformation.
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
          Strength training, coaching, cardio,<br />
          and group classes—for every level.
        </p>

        {/* Program Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 mt-8">
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <Zap className="w-10 h-10 mb-2 text-white" />
            <span className="font-semibold">Personal Training</span>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <Dumbbell className="w-10 h-10 mb-2 text-white" />
            <span className="font-semibold">Strength & Conditioning</span>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <Users className="w-10 h-10 mb-2 text-white" />
            <span className="font-semibold">Group Classes</span>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center">
            <HeartPulse className="w-10 h-10 mb-2 text-white" />
            <span className="font-semibold">Cardio Zone</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
