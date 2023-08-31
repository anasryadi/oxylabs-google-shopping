import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function LoadingPage() {
  return (
    <div className="p-5 md:p-12">
        <Skeleton />
        <Skeleton width={200} />
        </div>
  )
}

export default LoadingPage