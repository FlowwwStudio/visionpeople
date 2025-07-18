import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Vision People</h1>
          <p className="text-gray-600 mb-8">Download dine filer</p>
          
          <div className="space-y-4">
            <Link 
              href="/api/downloads/vpc_support_da.exe"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
            >
              📥 Download VPC Support (EXE)
            </Link>
            
            <Link 
              href="/api/downloads/supportskabelon.oft"
              className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
            >
              📧 Download Mail Template (OFT)
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>Klik på en af knapperne ovenfor for at downloade filen</p>
          </div>
        </div>
      </div>
    </div>
  )
} 