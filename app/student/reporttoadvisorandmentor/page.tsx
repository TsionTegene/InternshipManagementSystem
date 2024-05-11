/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0Xt0C9JbbBJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Internship Report
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Submit your internship details and report.
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" type="text" />
          </div>
          <div>
            <Label htmlFor="title">Internship Title</Label>
            <Input
              id="title"
              placeholder="Enter internship title"
              type="text"
            />
          </div>
          <div>
            <Label htmlFor="report">Report</Label>
            <Input accept=".pdf" id="report" type="file" />
          </div>
          <Button className="w-full" type="submit">
            Submit Report
          </Button>
        </form>
      </div>
    </main>
  );
}
