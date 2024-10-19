import React from 'react';
import { Upload } from 'lucide-react';
import './index.css'; 

const navigation = [
  { name: 'Upload', href: '/upload' },
  { name: 'About', href: '/about' },
  { name: 'GitHub', href: '#', external: true },
];

function EjarLanding() {
  const [file, setFile] = React.useState(null);
  const [pathname, setPathname] = React.useState('');

  React.useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <header className="w-full px-4 sm:fixed backdrop-blur bg-zinc-900/50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-2xl font-semibold duration-150 hover:text-white">
              Ejar
            </a>
            <nav>
              <ul className="flex items-center gap-4">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      className={`duration-150 hover:text-zinc-50 ${
                        pathname === item.href ? 'text-zinc-200' : 'text-zinc-400'
                      }`}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="max-w-3xl w-full space-y-8 text-center">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white">
            AI-Powered Contract Analysis
          </h1>
          <p className="text-zinc-400">
            Upload your Ejar document and let our advanced AI analyze it in seconds.
          </p>
          <div className="flex flex-col items-center">
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full max-w-md p-6 border-2 border-dashed border-zinc-700 rounded-lg cursor-pointer hover:border-zinc-500 transition-colors"
            >
              <Upload className="w-12 h-12 mb-4 text-zinc-400" />
              <span className="text-sm text-zinc-400">
                {file ? file.name : 'Click to upload or drag and drop'}
              </span>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.txt"
              />
            </label>
            <button
              className={`mt-6 px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                file
                  ? 'bg-zinc-100 text-zinc-900 hover:bg-white'
                  : 'bg-zinc-800 text-zinc-400 cursor-not-allowed'
              }`}
              disabled={!file}
            >
              {file ? 'Analyze Document' : 'Select a document to analyze'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default EjarLanding;
