/// <reference types="jquery" />

interface JQuery {
	telerik_ReportViewer(config: IReportViewerConfig): void;
}

interface IReportViewerConfig {
	serviceUrl: string;
	templateUrl: string;
	reportSource: IReportSource;
}

interface IReportSource {
	report: string;
	parameters: any;
}
