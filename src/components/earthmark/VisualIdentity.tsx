import logo from "../../assets/earthmark/earthmark-logo.png";

export default function VisualIdentity() {
  const colors = [
    { hex: "#52999C", name: "Teal", text: "white" },
    { hex: "#313131", name: "Dark Gray", text: "white" },
    { hex: "#9CCFF2", name: "Light Blue", text: "white" },
    { hex: "#F7F7F7", name: "Light Gray", text: "black" },
  ];

  return (
    <section
      id="visual-identity"
      className="py-20 px-6 bg-[#edf8ff]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="font-bold text-5xl text-black text-center mb-16">
          Visual Identity
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Typography */}
          <div className="bg-white p-10 rounded-lg shadow-lg">

            <h3 className="font-bold text-3xl text-black mb-8">
              Typography
            </h3>

            <div className="space-y-8">

              <div>
                <p className="font-medium text-xl text-black mb-3">
                  Headers
                </p>

                <p className="font-serif font-bold text-5xl text-black">
                  Merriweather
                </p>

                <p className="text-lg text-gray-600 mt-2">
                  Bold, elegant serif for headings
                </p>
              </div>

              <div>
                <p className="font-medium text-xl text-black mb-3">
                  Body Text
                </p>

                <p className="text-5xl text-black">
                  Roboto
                </p>

                <p className="text-lg text-gray-600 mt-2">
                  Clean, modern sans-serif for content
                </p>
              </div>

            </div>

          </div>

          {/* Color Palette */}
          <div className="bg-white p-10 rounded-lg shadow-lg">

            <h3 className="font-bold text-3xl text-black mb-8">
              Color Palette
            </h3>

            <div className="grid grid-cols-2 gap-6">

              {colors.map((color) => (
                <div
                  key={color.hex}
                  className="text-center"
                >

                  <div
                    className="w-full h-32 rounded-lg shadow-md border border-black mb-3 flex items-center justify-center"
                    style={{ backgroundColor: color.hex }}
                  >
                    <span
                      className="font-bold text-lg"
                      style={{ color: color.text }}
                    >
                      {color.hex}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700">
                    {color.name}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Logo */}
        <div className="mt-12 bg-white p-10 rounded-lg shadow-lg">

          <h3 className="font-bold text-3xl text-black mb-6 text-center">
            Logo Design
          </h3>

          <div className="flex flex-col md:flex-row items-center gap-8">

            <div className="flex-shrink-0">

              <img
                src={logo}
                alt="Earthmark Studios logo"
                className="h-32 w-auto border border-black shadow-md"
              />

            </div>

            <div className="flex-1">

              <p className="font-medium text-xl text-black mb-3">
                Logo Creation
              </p>

              <p className="italic text-lg leading-relaxed text-gray-700">
                The logo was custom-built to maintain simplicity while
                conveying brand identity. Adobe Illustrator was used to
                manipulate vector artwork and integrate brand typography
                into the final mark.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}