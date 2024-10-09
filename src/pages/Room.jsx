import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { appId, secret } from '../Utils/Helper';

const Room = () => {
  const { id } = useParams();

  const myLiveStream = async (element) => {
    // Generate Kit Token
    const appID = appId;
    const serverSecret = secret;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString(), "raoalimurad");

    // Create instance for live room
    const zc = ZegoUIKitPrebuilt.create(kitToken);

    // Join room function
    zc.joinRoom({
      container: element,
      sharedLinks: [{
        name: "Copy Link",
        url: `http://localhost:5173/room/${id}`,
      }],
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
      },
      showScreenSharingButton: true,
    });
  };

  useEffect(() => {
    const element = document.getElementById('live-stream');
    myLiveStream(element);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Live Streaming Room: <span className="text-blue-600">{id}</span>
        </h1>
        <div id="live-stream" className="w-full h-[600px] rounded-lg bg-gray-900 border-4 border-blue-500">
          {/* Live stream will appear here */}
        </div>
        <p className="text-center text-gray-500 mt-4">
          Share this room link with others to join: <span className="text-blue-500">{`http://localhost:5173/room/${id}`}</span>
        </p>
      </div>
    </div>
  );
};

export default Room;
