import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

export default function ApiReference() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">API Reference</h1>
      <div className="swagger-ui">
        <SwaggerUI url="/swagger.json" />
      </div>
    </div>
  );
}
