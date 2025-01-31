import AddSquare from "./add-square";
import AlertCircle from "./alert-circle";
import ArrowLeft from "./arrow-left";
import ArrowRight from "./arrow-right";
import Attachment from "./attachment";
import Bin from "./bin";
import Call from "./call";
import Calling from "./calling";
import CallMissed from "./call-missed";
import Check from "./check";
import ChevronDown from "./chevron-down";
import ChevronUp from "./chevron-up";
import Calendar from "./calendar";
import DangerCircle from "./danger-circle";
import DangerTriangle from "./danger-triangle";
import DocumentALignRight from "./document-align-right";
import DocumentUpload from "./document-upload";
import Dot from "./dot";
import Email from "./email";
import ExpandFill from "./expand-fill";
import EyeClose from "./eye-close";
import EyeOpen from "./eye-open";
import Facebook from "./facebook";
import Hamburger from "./hamburger";
import Home from "./home";
import Image from "./image";
import Instagram from "./instagram";
import Linkedin from "./linkedin";
import Location from "./location";
import Medium from "./medium";
import Message from "./message";
import Telephone from "./telephone";
import Twitter from "./twitter";
import { IconProps, Icons } from "./types";
import User from "./user";
import Tag from "./tag";
import Close from "./close";
import Chat from "./chat";
import Clock from "./clock";
import TickSquare from "./tick-square";
import InfoSquare from "./info-square";
import HiIcon from "./hi-icon";
import Notification from "./notification";
import Setting from "./setting";
import EditSquare from "./edit-square";
import Search from "./search";
import Filter from "./filter";
import Whatsapp from "./whatsapp";
import WhatsappGreen from "./whatsapp-green";
import ProfileCircle from "./profile-circle";
import TimeCircle from "./time-circle";
import PdfFile from "./pdf-file";
import DocFile from "./doc-file";
import MicMute from "./mic-mute";
import FaqCircle from "./faq-circle";
import LogOut from "./log-out";
import Ellipse from "./ellipse";
import Cancel from "./cancel";
import Play from "./play";
import TableBin from "./table-bin";
import GmailColored from "./gmail-colored";
import More from "./more";
interface Props extends IconProps {
  type: Icons;
}
export function Icon({ type, color, size }: Props) {
  const props = { color, size };

  switch (type) {
    case Icons.AddSquare:
      return <AddSquare {...props} />;

    case Icons.AlertCircle:
      return <AlertCircle {...props} />;

    case Icons.ArrowLeft:
      return <ArrowLeft {...props} />;

    case Icons.Attachment:
      return <Attachment {...props} />;

    case Icons.ArrowRight:
      return <ArrowRight {...props} />;

    case Icons.Bin:
      return <Bin {...props} />;

    case Icons.Calendar:
      return <Calendar {...props} />;

    case Icons.Call:
      return <Call {...props} />;

    case Icons.Calling:
      return <Calling {...props} />;

    case Icons.CallMissed:
      return <CallMissed {...props} />;

    case Icons.Cancel:
      return <Cancel {...props} />;

    case Icons.Chat:
      return <Chat {...props} />;

    case Icons.Check:
      return <Check {...props} />;

    case Icons.Calendar:
      return <Calendar {...props} />;

    case Icons.ChevronDown:
      return <ChevronDown {...props} />;

    case Icons.ChevronUp:
      return <ChevronUp {...props} />;

    case Icons.Clock:
      return <Clock {...props} />;

    case Icons.Close:
      return <Close {...props} />;

    case Icons.DangerCircle:
      return <DangerCircle {...props} />;

    case Icons.DangerTriangle:
      return <DangerTriangle {...props} />;

    case Icons.DocFile:
      return <DocFile {...props} />;

    case Icons.DocumentAlignRight:
      return <DocumentALignRight {...props} />;

    case Icons.DocumentUpload:
      return <DocumentUpload {...props} />;

    case Icons.Dot:
      return <Dot {...props} />;

    case Icons.EditSquare:
      return <EditSquare {...props} />;

    case Icons.Ellipse:
      return <Ellipse {...props} />;

    case Icons.Email:
      return <Email {...props} />;

    case Icons.ExpandFill:
      return <ExpandFill {...props} />;

    case Icons.EyeClose:
      return <EyeClose {...props} />;
    case Icons.EditSquare:
      return <EditSquare {...props} />;

    case Icons.EyeOpen:
      return <EyeOpen {...props} />;

    case Icons.Facebook:
      return <Facebook {...props} />;

    case Icons.FaqCircle:
      return <FaqCircle {...props} />;

    case Icons.Filter:
      return <Filter {...props} />;

    case Icons.GmailColored:
      return <GmailColored {...props} />;

    case Icons.Hamburger:
      return <Hamburger {...props} />;

    case Icons.HiIcon:
      return <HiIcon {...props} />;

    case Icons.Home:
      return <Home {...props} />;

    case Icons.InfoSquare:
      return <InfoSquare {...props} />;

    case Icons.Instagram:
      return <Instagram {...props} />;

    case Icons.Image:
      return <Image {...props} />;

    case Icons.Linkedin:
      return <Linkedin {...props} />;

    case Icons.Location:
      return <Location {...props} />;

    case Icons.LogOut:
      return <LogOut {...props} />;

    case Icons.Medium:
      return <Medium {...props} />;

    case Icons.Message:
      return <Message {...props} />;

    case Icons.MicMute:
      return <MicMute {...props} />;

    case Icons.More:
      return <More {...props} />;

    case Icons.Notification:
      return <Notification {...props} />;

    case Icons.PdfFile:
      return <PdfFile {...props} />;

    case Icons.Play:
      return <Play {...props} />;

    case Icons.ProfileCircle:
      return <ProfileCircle {...props} />;

    case Icons.Search:
      return <Search {...props} />;

    case Icons.Setting:
      return <Setting {...props} />;

    case Icons.Search:
      return <Search {...props} />;

    case Icons.Tag:
      return <Tag {...props} />;

    case Icons.TableBin:
      return <TableBin {...props} />;

    case Icons.Telephone:
      return <Telephone {...props} />;

    case Icons.TickSquare:
      return <TickSquare {...props} />;

    case Icons.TimeCircle:
      return <TimeCircle {...props} />;

    case Icons.Twitter:
      return <Twitter {...props} />;

    case Icons.User:
      return <User {...props} />;

    case Icons.Whatsapp:
      return <Whatsapp {...props} />;

    case Icons.WhatsappGreen:
      return <WhatsappGreen {...props} />;

    default:
      return <p>Pick an Icon</p>;
  }
}
