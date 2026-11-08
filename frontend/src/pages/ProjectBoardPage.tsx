import { useParams } from "react-router-dom";

export default function ProjectBoardPage() {
    const { projectId } = useParams();
    return <h1>Доска проекта: {projectId}</h1>
}