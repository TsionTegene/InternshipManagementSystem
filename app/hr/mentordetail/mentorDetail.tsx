/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4bmD6xPZYzn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center mb-6">
        <Avatar className="mr-4">
          <AvatarImage alt="Mentor" src="/placeholder-avatar.jpg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Senior Software Engineer
          </p>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4">Assigned Interns</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <Avatar className="mb-2">
            <AvatarImage alt="Intern 1" src="/placeholder-avatar.jpg" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <h3 className="text-lg font-medium mb-1">Alice Ingram</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Software Engineering Intern
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <Avatar className="mb-2">
            <AvatarImage alt="Intern 2" src="/placeholder-avatar.jpg" />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
          <h3 className="text-lg font-medium mb-1">John Lee</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Software Engineering Intern
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <Avatar className="mb-2">
            <AvatarImage alt="Intern 3" src="/placeholder-avatar.jpg" />
            <AvatarFallback>ES</AvatarFallback>
          </Avatar>
          <h3 className="text-lg font-medium mb-1">Emily Smith</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Software Engineering Intern
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <Avatar className="mb-2">
            <AvatarImage alt="Intern 4" src="/placeholder-avatar.jpg" />
            <AvatarFallback>MJ</AvatarFallback>
          </Avatar>
          <h3 className="text-lg font-medium mb-1">Michael Johnson</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Software Engineering Intern
          </p>
        </div>
      </div>
    </div>
  );
}
