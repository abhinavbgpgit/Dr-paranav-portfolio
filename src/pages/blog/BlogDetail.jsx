import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blog } from '../../json/blog';

const extraDetails = [
	`AI is now used in smart homes, healthcare, and transportation. Its impact is growing rapidly. Ethical concerns and automation trends are shaping the future.

In 2025, AI-powered diagnostics are helping doctors detect diseases earlier. Machine learning algorithms optimize city traffic, reducing pollution and commute times. Personalized education platforms use AI to adapt lessons for each student, improving outcomes. However, privacy and bias in AI systems remain major challenges, and experts are working on solutions to make AI fair and transparent.`,
	`Eco-friendly resorts, hidden gems in Southeast Asia, and adventure spots in South America are trending. Virtual reality tours and sustainable travel are popular in 2025.

Travelers are choosing destinations that support local communities and protect the environment. Smart booking apps recommend off-the-beaten-path locations based on your interests. Adventure travel is booming, with guided hikes, safaris, and cultural exchanges. Many resorts now offer carbon offset programs and eco-friendly amenities to attract conscious tourists.`,
	`Plant-based diets, mindful eating, and tech-enabled meal planning are recommended. Apps now track micronutrients and suggest recipes for health goals.

Nutritionists emphasize the importance of whole foods and reducing processed sugar. Wearable devices monitor hydration and vitamin levels, sending reminders to your phone. Online communities share recipes and support healthy habits. Mindful eating practices, such as slowing down and savoring each bite, are linked to better digestion and weight management.`,
	`AI-powered code editors, new frameworks, and serverless architectures are the focus. Developers are encouraged to join communities and keep learning.

JavaScript in 2025 includes features for real-time collaboration and automated testing. Popular frameworks like React and Vue have new updates for performance and accessibility. Serverless platforms allow developers to deploy apps faster and scale easily. Online bootcamps and forums help coders stay up-to-date with the latest trends and best practices.`,
	`Solar and wind power are leading the way in clean energy adoption. Smart grids and home-based renewable solutions are more accessible than ever.

Governments are investing in large-scale battery storage and microgrid technology. Homeowners can monitor energy usage and sell excess power back to the grid. Innovations in solar panel efficiency and wind turbine design are making renewable energy more affordable. Community projects encourage neighbors to share resources and reduce their carbon footprint together.`,
];

function ChevronLeftIcon() {
	return (
		<svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M13 15L8 10L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	);
}

function ChevronRightIcon() {
	return (
		<svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M7 5L12 10L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	);
}

export default function BlogDetail() {
	const navigate = useNavigate();
	const { id } = useParams();
	const blogIndex = Number(id);
	const post = blog[blogIndex];
	const details = extraDetails[blogIndex];

	if (!post) {
		return (
			<div className="p-8">
				<h2>Blog not found</h2>
				<button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
					Go Back
				</button>
			</div>
		);
	}

	const handlePrev = () => {
		if (blogIndex > 0) {
			navigate(`/blog/${blogIndex - 1}`);
		}
	};

	const handleNext = () => {
		if (blogIndex < blog.length - 1) {
			navigate(`/blog/${blogIndex + 1}`);
		}
	};

	return (
		<div className="relative max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-2">
			<button onClick={() => navigate('/blog')} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded    hover:bg-blue-600 disabled:opacity-50">
				Back to Blog
			</button>
			<div className="w-full flex items-center justify-center" style={{ height: '400px', position: 'relative' }}>
				{/* Left Chevron Button - perfectly centered and small */}
				<div style={{ position: 'absolute', left: '-32px', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
					<button
						onClick={handlePrev}
						disabled={blogIndex === 0}
						className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-lg hover:bg-blue-600 disabled:opacity-50"
						aria-label="Previous Blog"
						style={{ padding: 0 }}
					>
						<span className="flex items-center justify-center w-full h-full"><ChevronLeftIcon /></span>
					</button>
				</div>
				{/* Blog Image */}
				<img
					src={post.image.url}
					alt={post.image.alt}
					className="w-full h-[400px] object-cover rounded"
				/>
				{/* Right Chevron Button - perfectly centered and small */}
				<div style={{ position: 'absolute', right: '-32px', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
					<button
						onClick={handleNext}
						disabled={blogIndex === blog.length - 1}
						className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-lg hover:bg-blue-600 disabled:opacity-50"
						aria-label="Next Blog"
						style={{ padding: 0 }}
					>
						<span className="flex items-center justify-center w-full h-full"><ChevronRightIcon /></span>
					</button>
				</div>
			</div>
			<div className="mt-6">
				<h2 className="text-lg font-semibold mb-2">More Details</h2>
				<p className="text-gray-700 text-base whitespace-pre-line">{details}</p>
			</div>
		</div>
	);
}
