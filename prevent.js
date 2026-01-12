document.addEventListener("keydown",(function(e){if(e.ctrlKey)return e.preventDefault(),!1}));
 const workData = [
    {
      icon: "search",
      title: "Understand the Problem",
      description: "I analyze the problem deeply to identify the root causes and define clear goals.",
      color: "text-blue-500"
    },
    {
      icon: "lightbulb",
      title: "Explore Solutions",
      description: "I research industry best practices and brainstorm efficient approaches to solve it.",
      color: "text-purple-500"
    },
    {
      icon: "tool",
      title: "Plan & Develop",
      description: "I plan the structure and then write clean, scalable code with iterative improvements.",
      color: "text-green-500"
    },
    {
      icon: "check-circle",
      title: "Test & Deliver",
      description: "I rigorously test to ensure quality, then deliver the final product with documentation.",
      color: "text-yellow-400"
    }
  ];
const container = document.getElementById("work-cards");

workData.forEach(item => {
  const card = document.createElement("div");
  card.className =
    "bg-gradient-to-br from-[#6366F1]/20 to-[#A855F7]/20 backdrop-blur-xl border border-white/20 p-6 rounded-xl shadow-xl flex flex-col items-start hover:scale-105 transition duration-300";

  card.innerHTML = `
    <div class="mb-4 text-3xl ${item.color}">
      <i data-feather="${item.icon}"></i>
    </div>
    <h3 class="text-xl font-bold mb-2 text-white">${item.title}</h3>
    <p class="text-gray-200 text-sm">${item.description}</p>
  `;

  container.appendChild(card);
});

feather.replace();
