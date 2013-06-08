// Default empty project template
import bb.cascades 1.0

// creates one page with a label
Page {
    Container {
        layout: DockLayout {}
        ScrollView {
            scrollViewProperties.scrollMode: ScrollMode.Vertical
            scrollViewProperties.overScrollEffectMode: OverScrollEffectMode.None
            enabled: true
            WebView {
                url: "local:///assets/index.html"

            }

        }

    }
}
