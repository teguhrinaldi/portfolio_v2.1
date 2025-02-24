import Button from '../components/button';

export default function Home() {
	return (
		<main className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="text-center">
				<h1 className="text-3xl font-bold text-gray-800 mb-4">
					Hello, Next.js!
				</h1>
				<Button />
			</div>
		</main>
	);
}
