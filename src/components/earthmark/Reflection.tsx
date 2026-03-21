export default function Reflection() {
  return (
    <section id="reflection" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-5xl text-black text-center mb-6">
          Reflection & Learnings
        </h2>

        <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-16">
          What I learned from building this project and what I would do
          differently next time.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#52999c] text-white p-8 rounded-lg shadow-lg">
            <h3 className="font-bold text-3xl mb-6">What Went Well</h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">✨</span>
                <div>
                  <p className="font-medium text-xl mb-2">SCSS Organization</p>
                  <p className="text-lg leading-relaxed">
                    Using partials and variables made the CSS much more
                    maintainable. I could reuse colors and spacing values
                    throughout the project without repeating code.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">✨</span>
                <div>
                  <p className="font-medium text-xl mb-2">Mobile-First Approach</p>
                  <p className="text-lg leading-relaxed">
                    Building for mobile first and then adding complexity for
                    larger screens made the responsive design process much
                    smoother than I expected.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">✨</span>
                <div>
                  <p className="font-medium text-xl mb-2">Video Production Skills</p>
                  <p className="text-lg leading-relaxed">
                    Creating and editing my own video content gave me hands-on
                    experience with Adobe Premiere Pro and taught me more about
                    web-optimized video formats.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#313131] text-white p-8 rounded-lg shadow-lg">
            <h3 className="font-bold text-3xl mb-6">Challenges Faced</h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">⚡</span>
                <div>
                  <p className="font-medium text-xl mb-2">Art Direction Complexity</p>
                  <p className="text-lg leading-relaxed">
                    Getting the picture element syntax right took some trial and
                    error. Understanding when images would swap required testing
                    across multiple devices.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">⚡</span>
                <div>
                  <p className="font-medium text-xl mb-2">Video File Sizes</p>
                  <p className="text-lg leading-relaxed">
                    Balancing video quality with file size was tricky. I had to
                    compress and optimize multiple times to get acceptable
                    loading speeds.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">⚡</span>
                <div>
                  <p className="font-medium text-xl mb-2">Accessibility Testing</p>
                  <p className="text-lg leading-relaxed">
                    Creating accurate captions and transcripts was more
                    time-consuming than expected, but it taught me why
                    accessibility cannot be an afterthought.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9ccff2] to-[#52999c] text-white p-10 rounded-lg shadow-xl">
          <h3 className="font-bold text-3xl mb-6 text-center">Key Takeaways</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <p className="text-xl font-medium mb-2">Responsive Design</p>
              <p className="text-lg leading-relaxed">
                Mobile-first is not just a buzzword. It genuinely makes
                development easier and improves the final result.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">♿</div>
              <p className="text-xl font-medium mb-2">Accessibility Matters</p>
              <p className="text-lg leading-relaxed">
                Building accessible experiences from the start is much easier
                than trying to retrofit accessibility later.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <p className="text-xl font-medium mb-2">Tools & Workflow</p>
              <p className="text-lg leading-relaxed">
                SCSS and clear project organization saved a huge amount of time
                as the project grew in complexity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}